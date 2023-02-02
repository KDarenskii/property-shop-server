const jsonServer = require("json-server");
const auth = require("json-server-auth");

const rules = auth.rewriter({
    refresh: 660,
    favourites: 660,
    bids: 660,
});
const app = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router("db.json");

app.db = router.db;

app.use(middlewares);
app.use(rules);
app.use(auth);
app.use(router);
app.listen(3500);