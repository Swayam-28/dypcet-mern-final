# DYP College MERN — Final (MongoDB Compass + Static Hero)

Run server:
```
cd server
cp .env.sample .env
npm i
npm run dev
```
Create admin:
```
curl -X POST http://localhost:5000/api/auth/register -H "Content-Type: application/json" -d '{"name":"Admin","email":"admin@example.com","password":"Admin@123"}'
```
Run client:
```
cd client
cp .env.sample .env
npm i
npm run dev
```
Open http://localhost:5173
