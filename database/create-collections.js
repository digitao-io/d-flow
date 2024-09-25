db.createCollection("pages");
db.createCollection("files");
db.createCollection("users");

db.page.createIndex(
  { key: 1 },
  { unique: true, sparse: false },
)

db.files.createIndex(
  { key: 1 },
  { unique: true, sparse: false },
)

db.users.createIndex(
  { username: 1 },
  { unique: true, sparse: false },
)