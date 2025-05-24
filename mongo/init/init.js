db = db.getSiblingDB('workitems_db'); // muda para o banco de dados correto

db.createUser({
  user: "user",
  pwd: "password",
  roles: [
    {
      role: "readWrite",
      db: "workitems_db"
    }
  ]
});

