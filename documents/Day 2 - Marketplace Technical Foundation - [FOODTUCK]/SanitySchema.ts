// // 1. Define Technical Requirements


// // Based on my business goals and data schema, here are the technical requirements:

// // Frontend Requirements
// // •	User Interface:
// // o	Home Page: Showcase featured meals, promotions, and a search bar.
// // o	Product Listing: Display meals, beverages, and desserts with filters (e.g., category, price).
// // o	Product Details: Show detailed information (e.g., name, price, description, customization options).
// // o	Cart: Allow users to view and modify their cart.
// // o	Checkout: Collect delivery details and process payments.
// // o	Order Confirmation: Display order summary and tracking information.
// // •	Responsive Design:
// // o	Ensure the website works seamlessly on mobile, tablet, and desktop devices.
// // •	Dynamic Content:
// // o	Fetch product data from Sanity CMS and display it dynamically.
// // Sanity CMS as Backend




// // 1. Product Schema

// // The Product schema defines the structure for the meals, beverages, and desserts offered by your restaurant.
// // Fields
// // •	name: Name of the product (e.g., "Margherita Pizza").
// // •	description: Short description of the product.
// // •	price: Price of the product.
// // •	category: Category of the product (e.g., "Pizza", "Beverage", "Dessert").
// // •	image: Image of the product.
// // •	customizationOptions: List of customization options (e.g., "Extra Cheese", "No Onions").
// // •	availability: Stock status (e.g., "In Stock", "Out of Stock").

// // Sanity Schema

// export default {
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   fields: [
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Product Name',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'description',
//       type: 'text',
//       title: 'Description',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'price',
//       type: 'number',
//       title: 'Price',
//       validation: Rule => Rule.required().min(0),
//     },
//     {
//       name: 'category',
//       type: 'string',
//       title: 'Category',
//       options: {
//         list: [
//           { title: 'Pizza', value: 'pizza' },
//           { title: 'Beverage', value: 'beverage' },
//           { title: 'Dessert', value: 'dessert' },
//         ],
//       },
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'image',
//       type: 'image',
//       title: 'Product Image',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'customizationOptions',
//       type: 'array',
//       title: 'Customization Options',
//       of: [{ type: 'string' }],
//     },
//     {
//       name: 'availability',
//       type: 'string',
//       title: 'Availability',
//       options: {
//         list: [
//           { title: 'In Stock', value: 'in-stock' },
//           { title: 'Out of Stock', value: 'out-of-stock' },
//         ],
//       },
//       validation: Rule => Rule.required(),
//     },
//   ],
// };






// // 2. Order Schema

// // The Order schema defines the structure for customer orders.
// // Fields
// // •	orderId: Unique identifier for the order.
// // •	customerId: ID of the customer placing the order.
// // •	products: List of products in the order (with quantities).
// // •	totalPrice: Total cost of the order.
// // •	orderStatus: Current status of the order (e.g., "Pending", "Preparing", "Out for Delivery", "Delivered").
// // •	orderTimestamp: Date and time of order placement.
// // •	deliveryAddress: Address where the order will be delivered.
// // •	riderId: ID of the rider assigned to deliver the order.

// // Sanity Schema

// export default {
//   name: 'order',
//   type: 'document',
//   title: 'Order',
//   fields: [
//     {
//       name: 'orderId',
//       type: 'string',
//       title: 'Order ID',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'customerId',
//       type: 'reference',
//       to: [{ type: 'customer' }],
//       title: 'Customer',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'products',
//       type: 'array',
//       title: 'Products',
//       of: [
//         {
//           type: 'object',
//           fields: [
//             { name: 'productId', type: 'reference', to: [{ type: 'product' }], title: 'Product' },
//             { name: 'quantity', type: 'number', title: 'Quantity', validation: Rule => Rule.required().min(1) },
//           ],
//         },
//       ],
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'totalPrice',
//       type: 'number',
//       title: 'Total Price',
//       validation: Rule => Rule.required().min(0),
//     },
//     {
//       name: 'orderStatus',
//       type: 'string',
//       title: 'Order Status',
//       options: {
//         list: [
//           { title: 'Pending', value: 'pending' },
//           { title: 'Preparing', value: 'preparing' },
//           { title: 'Out for Delivery', value: 'out-for-delivery' },
//           { title: 'Delivered', value: 'delivered' },
//         ],
//       },
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'orderTimestamp',
//       type: 'datetime',
//       title: 'Order Timestamp',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'deliveryAddress',
//       type: 'string',
//       title: 'Delivery Address',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'riderId',
//       type: 'reference',
//       to: [{ type: 'rider' }],
//       title: 'Rider',
//       validation: Rule => Rule.required(),
//     },
//   ],
// };





// // 3. Customer Schema

// // The Customer schema defines the structure for customer information.
// // Fields
// // •	customerId: Unique identifier for the customer.
// // •	name: Full name of the customer.
// // •	contactInfo: Phone number and email address.
// // •	address: Default delivery address.
// // •	orderHistory: List of past orders placed by the customer.
// // •	preferences: Customer preferences (e.g., favorite cuisine, dietary restrictions).

// // Sanity Schema

// export default {
//   name: 'customer',
//   type: 'document',
//   title: 'Customer',
//   fields: [
//     {
//       name: 'customerId',
//       type: 'string',
//       title: 'Customer ID',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Name',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'contactInfo',
//       type: 'object',
//       title: 'Contact Info',
//       fields: [
//         { name: 'phone', type: 'string', title: 'Phone' },
//         { name: 'email', type: 'string', title: 'Email' },
//       ],
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'address',
//       type: 'string',
//       title: 'Address',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'orderHistory',
//       type: 'array',
//       title: 'Order History',
//       of: [{ type: 'reference', to: [{ type: 'order' }] }],
//     },
//     {
//       name: 'preferences',
//       type: 'object',
//       title: 'Preferences',
//       fields: [
//         { name: 'favoriteCuisine', type: 'string', title: 'Favorite Cuisine' },
//         { name: 'dietaryRestrictions', type: 'array', of: [{ type: 'string' }], title: 'Dietary Restrictions' },
//       ],
//     },
//   ],
// };





// // 4. Rider Schema

// // The Rider schema defines the structure for delivery personnel.
// // Fields
// // •	riderId: Unique identifier for the rider.
// // •	name: Full name of the rider.
// // •	contactInfo: Phone number and email address.
// // •	vehicleType: Type of vehicle used for delivery (e.g., "Bike", "Scooter").
// // •	availabilityStatus: Current status of the rider (e.g., "Available", "Busy", "Offline").
// // •	zoneId: ID of the delivery zone the rider operates in.

// // Sanity Schema

// export default {
//   name: 'rider',
//   type: 'document',
//   title: 'Rider',
//   fields: [
//     {
//       name: 'riderId',
//       type: 'string',
//       title: 'Rider ID',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'name',
//       type: 'string',
//       title: 'Name',
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'contactInfo',
//       type: 'object',
//       title: 'Contact Info',
//       fields: [
//         { name: 'phone', type: 'string', title: 'Phone' },
//         { name: 'email', type: 'string', title: 'Email' },
//       ],
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'vehicleType',
//       type: 'string',
//       title: 'Vehicle Type',
//       options: {
//         list: [
//           { title: 'Bike', value: 'bike' },
//           { title: 'Scooter', value: 'scooter' },
//         ],
//       },
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'availabilityStatus',
//       type: 'string',
//       title: 'Availability Status',
//       options: {
//         list: [
//           { title: 'Available', value: 'available' },
//           { title: 'Busy', value: 'busy' },
//           { title: 'Offline', value: 'offline' },
//         ],
//       },
//       validation: Rule => Rule.required(),
//     },
//     {
//       name: 'zoneId',
//       type: 'reference',
//       to: [{ type: 'deliveryZone' }],
//       title: 'Delivery Zone',
//       validation: Rule => Rule.required(),
//     },
//   ],
// };






// // Summary

// // •	Product Schema: Defines meals, beverages, and desserts.
// // •	Order Schema: Tracks customer orders.
// // •	Customer Schema: Stores customer information and preferences.
// // •	Rider Schema: Manages delivery personnel.

// // Third-Party APIs

// // •	Payment Gateway:
// // o	Integrate a payment gateway (e.g., Stripe, PayPal) for secure transactions.

// // •	Shipment Tracking:
// // o	Use a third-party API for real-time order tracking (e.g., Google Maps API for delivery tracking).
