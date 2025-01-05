```javascript
const query = ['John Doe', 'Jane Doe'];
// Correct usage of $in operator. This will match documents where name is 'John Doe' or 'Jane Doe'
db.collection('users').find({ name: { $in: query } }).toArray();
```