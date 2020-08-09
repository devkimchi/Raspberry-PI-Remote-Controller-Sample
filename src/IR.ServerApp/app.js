let express = require('express');
let remote = require('./remote');

let app = express();

app.get('/remote/switchon', function(req, res) {
    let device = req.query.device;
    remote.onSwitchOn(device);

    let message = {
        "message": device + " turned on"
    }

    res.send(message);
});

app.get('/remote/switchoff', function(req, res) {
  let device = req.query.device;
  remote.onSwitchOff(device);

    let message = {
        "message": device + " turned off"
    }

    res.send(message);
});

app.get('/health', function(req, res) {
    res.send("OK");
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404);
  res.send('not found');  
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(4000, () => {
  console.log("app started !!");
});

module.export = app;
