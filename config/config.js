

const config = {
 env: process.env.NODE_ENV || 'development', 
 port: process.env.PORT || 1975,
 jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key", 
 mongoUri: process.env.MONGODB_URI || "mongodb+srv://kevingwd:IUkOfntTU8n4ukq9@kevincen.tu0ypka.mongodb.net/Marketplace?retryWrites=true&w=majority"||
process.env.MONGO_HOST ||
 'mongodb://' + (process.env.IP || 'localhost') + ':' + 
(process.env.MONGO_PORT || '27017') +
 '/mernproject' 
 }
 export default config
