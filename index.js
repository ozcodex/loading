const msgs = require('./messages');
limit = Math.floor(Math.random() * (5) + 1);
print = (msg,wait) => {setTimeout(() => process.stdout.write(msg),wait)}
sync = 100
for( i = limit ; limit > 0 ; limit-- ){
    pos = Math.floor(Math.random()*msgs.length)
    m = msgs[pos]+'\n'
    m.split(/([\.,])/g).map((val,idx) => {print(val,sync);sync+=idx*100})
    sync += Math.floor(Math.random()*500+200)
}
