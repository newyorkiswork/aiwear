export interface OrderItem {
  id: string
  name: string
  size: string
  color: string
  quantity: number
  price: number
  image: string
}

export interface Order {
  id: string
  orderNumber: string
  customerName: string
  customerEmail: string
  customerPhone: string
  items: OrderItem[]
  total: number
  paymentMethod: 'zelle' | 'cashapp'
  paymentStatus: 'pending' | 'paid'
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered'
  orderDate: string
  shippingAddress: string
  memo: string
  confirmationCode: string
}

// In-memory storage for orders (in production, this would be a database)
let orders: Order[] = []
let orderCounter = 1000 // Starting order number

export function generateOrderNumber(): string {
  const date = new Date()
  const year = date.getFullYear().toString().slice(-2)
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const sequence = orderCounter.toString().padStart(4, '0')
  
  orderCounter++
  return `AIW${year}${month}${day}-${sequence}`
}

export function generateConfirmationCode(): string {
  // Generate a 6-character alphanumeric code
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < 6; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function createOrder(orderData: Omit<Order, 'id' | 'orderNumber' | 'orderDate' | 'memo' | 'confirmationCode'>): Order {
  const orderNumber = generateOrderNumber()
  const orderDate = new Date().toISOString().split('T')[0]
  const confirmationCode = generateConfirmationCode()
  
  // Create memo with order details
  const itemSummary = orderData.items.map(item => 
    `${item.quantity}x ${item.name} (${item.size}, ${item.color})`
  ).join(', ')
  
  const memo = `AI Wear Order #${orderNumber} - ${itemSummary}`
  
  const order: Order = {
    id: `order_${Date.now()}`,
    orderNumber,
    orderDate,
    memo,
    confirmationCode,
    ...orderData
  }
  
  orders.push(order)
  
  // Send email notifications
  sendOrderNotification(order)
  sendCustomerConfirmation(order)
  
  return order
}

export function getOrders(): Order[] {
  return [...orders]
}

export function getOrderByNumber(orderNumber: string): Order | undefined {
  return orders.find(order => order.orderNumber === orderNumber)
}

export function updateOrderStatus(orderNumber: string, status: Order['orderStatus']): Order | null {
  const order = orders.find(o => o.orderNumber === orderNumber)
  if (order) {
    order.orderStatus = status
    return order
  }
  return null
}

export function updatePaymentStatus(orderNumber: string, status: Order['paymentStatus']): Order | null {
  const order = orders.find(o => o.orderNumber === orderNumber)
  if (order) {
    order.paymentStatus = status
    return order
  }
  return null
}

async function sendOrderNotification(order: Order): Promise<void> {
  try {
    const emailContent = `
New Order Received - AI Wear

Order Number: ${order.orderNumber}
Date: ${order.orderDate}
Customer: ${order.customerName}
Email: ${order.customerEmail}
Phone: ${order.customerPhone}

Items:
${order.items.map(item => 
  `- ${item.quantity}x ${item.name} (${item.size}, ${item.color}) - $${(item.price * item.quantity).toFixed(2)}`
).join('\n')}

Total: $${order.total.toFixed(2)}
Payment Method: ${order.paymentMethod.toUpperCase()}
Payment Status: ${order.paymentStatus.toUpperCase()}

Shipping Address:
${order.shippingAddress}

Payment Memo: ${order.memo}

---
This is an automated notification from AI Wear.
    `.trim()

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>New Pre-Order #${order.orderNumber} - AI Wear</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            line-height: 1.6; 
            color: #1f2937; 
            background: #f9fafb;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        }
        .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
            position: relative;
            z-index: 1;
        }
        .header h2 {
            font-size: 18px;
            font-weight: 500;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }
        .content {
            padding: 40px 30px;
        }
        .alert-banner {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
            font-weight: 600;
        }
        .section {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 24px;
        }
        .section h3 {
            color: #1e293b;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .section h3::before {
            content: '';
            width: 4px;
            height: 20px;
            background: #f59e0b;
            border-radius: 2px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        .info-item {
            display: flex;
            flex-direction: column;
        }
        .info-label {
            font-size: 12px;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .info-value {
            font-size: 16px;
            font-weight: 500;
            color: #1e293b;
        }
        .confirmation-code {
            background: #f59e0b;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 1px;
            display: inline-block;
        }
        .order-item {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 16px;
            margin-bottom: 12px;
        }
        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 8px;
        }
        .item-name {
            font-weight: 600;
            color: #1e293b;
            font-size: 16px;
        }
        .item-price {
            font-weight: 700;
            color: #f59e0b;
            font-size: 16px;
        }
        .item-details {
            color: #64748b;
            font-size: 14px;
        }
        .total-section {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-top: 20px;
        }
        .total-amount {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 4px;
        }
        .payment-memo {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 6px;
            padding: 16px;
            margin-top: 20px;
        }
        .memo-label {
            font-weight: 600;
            color: #92400e;
            margin-bottom: 8px;
        }
        .memo-text {
            background: white;
            padding: 12px;
            border-radius: 4px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            color: #1e293b;
            word-break: break-all;
        }
        .footer {
            background: #f8fafc;
            border-top: 1px solid #e2e8f0;
            padding: 20px 30px;
            text-align: center;
            color: #64748b;
            font-size: 12px;
        }
        .action-buttons {
            display: flex;
            gap: 12px;
            margin-top: 24px;
            justify-content: center;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.2s;
        }
        .btn-primary {
            background: #f59e0b;
            color: white;
        }
        .btn-secondary {
            background: #e2e8f0;
            color: #1e293b;
        }
        .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; }
            .action-buttons { flex-direction: column; }
            .content { padding: 20px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🛍️ New Pre-Order</h1>
            <h2>AI Wear Order Management</h2>
        </div>
        
        <div class="content">
            <div class="alert-banner">
                ⚡ New order received and requires your attention
            </div>
            
            <div class="section">
                <h3>Order Information</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Order Number</span>
                        <span class="info-value">${order.orderNumber}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Confirmation Code</span>
                        <span class="confirmation-code">${order.confirmationCode}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Date</span>
                        <span class="info-value">${order.orderDate}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Payment Method</span>
                        <span class="info-value">${order.paymentMethod.toUpperCase()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Status</span>
                        <span class="info-value">${order.paymentStatus.toUpperCase()}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Total Amount</span>
                        <span class="info-value">$${order.total.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h3>Customer Information</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Name</span>
                        <span class="info-value">${order.customerName}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Email</span>
                        <span class="info-value">${order.customerEmail}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Phone</span>
                        <span class="info-value">${order.customerPhone}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Shipping</span>
                        <span class="info-value">${order.shippingAddress}</span>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h3>Order Items</h3>
                ${order.items.map(item => `
                    <div class="order-item">
                        <div class="item-header">
                            <span class="item-name">${item.quantity}x ${item.name}</span>
                            <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div class="item-details">
                            Size: ${item.size} | Color: ${item.color}
                        </div>
                    </div>
                `).join('')}
                
                <div class="total-section">
                    <div class="total-amount">$${order.total.toFixed(2)}</div>
                    <div>Total Order Value</div>
                </div>
            </div>
            
            <div class="payment-memo">
                <div class="memo-label">Payment Memo</div>
                <div class="memo-text">${order.memo}</div>
            </div>
            
            <div class="action-buttons">
                <a href="mailto:${order.customerEmail}" class="btn btn-primary">Reply to Customer</a>
                <a href="tel:${order.customerPhone}" class="btn btn-secondary">Call Customer</a>
            </div>
        </div>
        
        <div class="footer">
            <p>This is an automated notification from the AI Wear order management system</p>
            <p>Order #${order.orderNumber} | ${order.orderDate}</p>
        </div>
    </div>
</body>
</html>
    `.trim()

    // Send email using the API route
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: 'myny@mynewyorkishome.com',
        subject: `New Pre-Order #${order.orderNumber} - AI Wear`,
        html: htmlContent,
        text: emailContent,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Failed to send email:')
      console.error('Response status:', response.status)
      console.error('Response text:', errorText)
      throw new Error('Email sending failed')
    }

    const result = await response.json()
    console.log('Email sent successfully:', result)
    
  } catch (error) {
    console.error('Failed to send order notification:', error)
    // Fallback to console log if email fails
    console.log('Order notification (fallback):', {
      orderNumber: order.orderNumber,
      customer: order.customerName,
      total: order.total,
      memo: order.memo
    })
  }
}

async function sendCustomerConfirmation(order: Order): Promise<void> {
  try {
    const emailContent = `
Thank you for your pre-order with AI Wear!

Order Number: ${order.orderNumber}
Confirmation Code: ${order.confirmationCode}
Date: ${order.orderDate}

Items:
${order.items.map(item => 
  `- ${item.quantity}x ${item.name} (${item.size}, ${item.color}) - $${(item.price * item.quantity).toFixed(2)}`
).join('\n')}

Total: $${order.total.toFixed(2)}
Payment Method: ${order.paymentMethod.toUpperCase()}

Payment Instructions:
${order.paymentMethod === 'zelle' 
  ? `Send payment to: 347-806-7290\nMemo: ${order.memo}`
  : `Send payment to: $newyorkishome\nMemo: ${order.memo}`
}

We'll process your pre-order once payment is received. You'll receive a confirmation when your order ships.

Thank you for choosing AI Wear!
    `.trim()

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Pre-Order Confirmation #${order.orderNumber} - AI Wear</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            line-height: 1.6; 
            color: #1f2937; 
            background: #f9fafb;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .header {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
            position: relative;
        }
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="1" fill="white" opacity="0.1"/><circle cx="50" cy="10" r="0.5" fill="white" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
        }
        .header h1 {
            font-size: 28px;
            font-weight: 700;
            margin-bottom: 8px;
            position: relative;
            z-index: 1;
        }
        .header h2 {
            font-size: 18px;
            font-weight: 500;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }
        .content {
            padding: 40px 30px;
        }
        .welcome-message {
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: white;
            padding: 24px;
            border-radius: 8px;
            margin-bottom: 30px;
            text-align: center;
        }
        .welcome-message h3 {
            font-size: 20px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .section {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 24px;
            margin-bottom: 24px;
        }
        .section h3 {
            color: #1e293b;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .section h3::before {
            content: '';
            width: 4px;
            height: 20px;
            background: #f59e0b;
            border-radius: 2px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
        }
        .info-item {
            display: flex;
            flex-direction: column;
        }
        .info-label {
            font-size: 12px;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 4px;
        }
        .info-value {
            font-size: 16px;
            font-weight: 500;
            color: #1e293b;
        }
        .confirmation-code {
            background: #f59e0b;
            color: white;
            padding: 8px 16px;
            border-radius: 6px;
            font-weight: 700;
            font-size: 14px;
            letter-spacing: 1px;
            display: inline-block;
        }
        .order-item {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            padding: 16px;
            margin-bottom: 12px;
        }
        .item-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 8px;
        }
        .item-name {
            font-weight: 600;
            color: #1e293b;
            font-size: 16px;
        }
        .item-price {
            font-weight: 700;
            color: #f59e0b;
            font-size: 16px;
        }
        .item-details {
            color: #64748b;
            font-size: 14px;
        }
        .total-section {
            background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
            color: white;
            padding: 20px;
            border-radius: 8px;
            text-align: center;
            margin-top: 20px;
        }
        .total-amount {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 4px;
        }
        .payment-instructions {
            background: #fef3c7;
            border: 1px solid #f59e0b;
            border-radius: 6px;
            padding: 20px;
            margin-top: 20px;
        }
        .payment-header {
            font-weight: 600;
            color: #92400e;
            margin-bottom: 16px;
            font-size: 16px;
        }
        .payment-method {
            background: white;
            padding: 16px;
            border-radius: 6px;
            margin-bottom: 12px;
        }
        .payment-amount {
            font-size: 18px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 8px;
        }
        .payment-details {
            color: #64748b;
            font-size: 14px;
            margin-bottom: 8px;
        }
        .memo-box {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            padding: 12px;
            font-family: 'Courier New', monospace;
            font-size: 14px;
            color: #1e293b;
            word-break: break-all;
            margin-top: 8px;
        }
        .footer {
            background: #f8fafc;
            border-top: 1px solid #e2e8f0;
            padding: 20px 30px;
            text-align: center;
            color: #64748b;
            font-size: 12px;
        }
        .action-buttons {
            display: flex;
            gap: 12px;
            margin-top: 24px;
            justify-content: center;
        }
        .btn {
            display: inline-block;
            padding: 12px 24px;
            border-radius: 6px;
            text-decoration: none;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.2s;
        }
        .btn-primary {
            background: #f59e0b;
            color: white;
        }
        .btn-secondary {
            background: #e2e8f0;
            color: #1e293b;
        }
        .btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }
        .next-steps {
            background: #f0f9ff;
            border: 1px solid #0ea5e9;
            border-radius: 6px;
            padding: 16px;
            margin-top: 20px;
        }
        .next-steps h4 {
            color: #0c4a6e;
            font-size: 16px;
            font-weight: 600;
            margin-bottom: 8px;
        }
        .next-steps p {
            color: #0369a1;
            font-size: 14px;
        }
        @media (max-width: 600px) {
            .info-grid { grid-template-columns: 1fr; }
            .action-buttons { flex-direction: column; }
            .content { padding: 20px; }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎉 Pre-Order Confirmation</h1>
            <h2>AI Wear</h2>
        </div>
        
        <div class="content">
            <div class="welcome-message">
                <h3>Thank you for your order!</h3>
                <p>Hi ${order.customerName}, we're excited to get your items ready for you.</p>
            </div>
            
            <div class="section">
                <h3>Order Information</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <span class="info-label">Order Number</span>
                        <span class="info-value">${order.orderNumber}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Confirmation Code</span>
                        <span class="confirmation-code">${order.confirmationCode}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Date</span>
                        <span class="info-value">${order.orderDate}</span>
                    </div>
                    <div class="info-item">
                        <span class="info-label">Payment Method</span>
                        <span class="info-value">${order.paymentMethod.toUpperCase()}</span>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h3>Order Items</h3>
                ${order.items.map(item => `
                    <div class="order-item">
                        <div class="item-header">
                            <span class="item-name">${item.quantity}x ${item.name}</span>
                            <span class="item-price">$${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                        <div class="item-details">
                            Size: ${item.size} | Color: ${item.color}
                        </div>
                    </div>
                `).join('')}
                
                <div class="total-section">
                    <div class="total-amount">$${order.total.toFixed(2)}</div>
                    <div>Total Order Value</div>
                </div>
            </div>
            
            <div class="payment-instructions">
                <div class="payment-header">Payment Instructions</div>
                <div class="payment-method">
                    <div class="payment-amount">$${order.total.toFixed(2)}</div>
                    <div class="payment-details">
                        ${order.paymentMethod === 'zelle' 
                          ? 'Send payment to: <strong>347-806-7290</strong>'
                          : 'Send payment to: <strong>$newyorkishome</strong>'
                        }
                    </div>
                    <div class="payment-details">
                        <strong>Important:</strong> Include this memo when sending payment
                    </div>
                    <div class="memo-box">${order.memo}</div>
                </div>
            </div>
            
            <div class="next-steps">
                <h4>What happens next?</h4>
                <p>We'll process your pre-order once payment is received. You'll receive a confirmation email with tracking information when your order ships.</p>
            </div>
            
            <div class="action-buttons">
                <a href="mailto:support@aiwear.com" class="btn btn-primary">Contact Support</a>
                <a href="https://aiwear-beta.vercel.app" class="btn btn-secondary">Visit Our Store</a>
            </div>
        </div>
        
        <div class="footer">
            <p>Thank you for choosing AI Wear!</p>
            <p>Order #${order.orderNumber} | ${order.orderDate}</p>
        </div>
    </div>
</body>
</html>
    `.trim()

    console.log('Sending customer confirmation to:', order.customerEmail)
    
    // Send email using the API route
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: order.customerEmail,
        subject: `Pre-Order Confirmation #${order.orderNumber} - AI Wear`,
        html: htmlContent,
        text: emailContent,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Failed to send customer confirmation:')
      console.error('Response status:', response.status)
      console.error('Response text:', errorText)
      throw new Error('Customer confirmation email failed')
    }

    const result = await response.json()
    console.log('Customer confirmation sent successfully:', result)
    
  } catch (error) {
    console.error('Failed to send customer confirmation:', error)
    // Fallback to console log if email fails
    console.log('Customer confirmation (fallback):', {
      orderNumber: order.orderNumber,
      customer: order.customerName,
      email: order.customerEmail
    })
  }
}

// Initialize with some sample orders for testing
export function initializeSampleOrders(): void {
  if (orders.length === 0) {
    createOrder({
      customerName: "John Doe",
      customerEmail: "john@example.com",
      customerPhone: "555-0123",
      items: [
        {
          id: "tokens-tee-black",
          name: "AI Runs on Tokens - Classic Tee (Black)",
          size: "L",
          color: "Black",
          quantity: 2,
          price: 19.99,
          image: "/tokens-tee-black.png"
        }
      ],
      total: 39.98,
      paymentMethod: "zelle",
      paymentStatus: "pending",
      orderStatus: "pending",
      shippingAddress: "123 Main St, New York, NY 10001"
    })
  }
}
