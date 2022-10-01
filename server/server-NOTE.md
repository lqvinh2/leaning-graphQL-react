Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force


package.json => line 5  "main": "index.js", change index.js to app.js
để khi chạy 'npm run server' nó sẽ hiểu là main: 'app.js'

// type Mutation => createAuthor() không cần field id vì field này tự tạo trong mongoDb