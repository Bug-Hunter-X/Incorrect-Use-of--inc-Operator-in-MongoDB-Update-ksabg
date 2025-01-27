```javascript
// Correct usage of $inc operator
db.collection.updateOne({ _id: 1 }, { $inc: { count: 1 } });
```