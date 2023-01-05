const express = require('express')
const generalRouter = require('./routes/generalRouter')
const socketio = require('socket.io')
const http = require('http')
const {addUser,removeUser,getUser,getUsersInRoom} = require('./utils/users')

const app = express()

const server = http.createServer(app)
const io = socketio(server,{
    upgradeTimeout:30000,
    pingTimeout:60000,
    pingInterval:10000,
    serverClient:true,
    agent:false,
    cookie:false,
    rejectUnauthorized:false,
    reconnectionDelay:1000,
    reconnectionDelayMax:5000,
    maxHttpBufferSize:100000000
}) 

// const words = ['drunk','save','merciful','scarecrow','faint','optimal','serve','curtain','happen','soda','miniature','sip','puny','handy','stupendous','furtive','copy','measly','laboured','warn','miscreant','dime','taboo','tip','staking','cute','pat','impulse','birthday','rely','word','bleach','offer','command','inject','lavish','shame','border','receipt','tank','hollow','back','boast','competition','wall','surprise','seat','belong','fence','cream','look','unwieldy','giants','realize','substance','terrify','bent','greasy','aggressive','friends','aboard','size','limping','jumpy','ugly','clap','boy','soft','vulgar','wry','boorish','savory','afford','pencil','toys','water','undress','include','frightened','gate','bedroom','haircut','temper','gun','uncle','challenge','lumber','groan','toe','use','mellow','literate','explode','shelf','murder','step','reject','ice','brush','difficult','gaping','spare','bath','unarmed','saw','even','sidewalk','improve','sense','scent','notebook','longterm','star','childlike','spill','sweltering','abashed','demonic','valuable','early','whispering','disapprove','introduce','interrupt','stupid','division','unbiased','greedy','intend','road','cats','quicksand','reading','market','apparatus','hurried','volleyball','left','silk','coast','leg','null','angry','future','inconclusive','sedate','story','best','jolly','woman','slave','thread','thunder','large','signal','axiomatic','callous','mountain','holiday','ajar','bitesized','nimble','turkey','toad','successful','glossy','nose','print','tedious','concentrate','scattered','load','secondhand','needle','dependent','bump','absorbed','butter','grubby','vengeful','peel','dusty','search','victorious','type','strengthen','jar','pushy','economic','rat','nervous','skate','thankful','lie','few','railway','wonderful','pray','foregoing','current','appear','scene','warm','board','blot','number','boring','branch','extralarge','fluttering','wrist','blueeyed','abhorrent','numberless','grip','trip','meaty','rotten','effect','yummy','puffy','windy','breakable','birth','plastic','oafish','cause','doctor','subtract','mother','secret','fluffy','crook','learn','knit','rob','parallel','chase','toes','spiritual','snakes','lettuce','alarm','end','joyous','wary','spiders','school','psychedelic','absorbing','invite','oldfashioned','tooth','succeed','increase','tasteful','train','jealous','consist','vagabond','wink','befitting','wonder','oil','calculator','inexpensive','motionless','utter','mountainous','agree','foolish','thundering','drown','zippy','berry','violet','scientific','conscious','zealous','guiltless','sleep','fabulous','fuel','loss','joke','kill','smelly','truck','thaw','cooing','afternoon','mint','bike','songs','bad','bow','devilish','battle','friction','apathetic','activity','enthusiastic','tangible','public','eatable','dead','substantial','creator','brawny','hydrant','shivering','icky','woozy','admit','mailbox','super','abiding','bloody','wideeyed','rail','healthy','organic','list','children','haunt','snore','hallowed','fear','object','multiply','past','lock','profuse','tail','dog','horrible','racial','frightening','insect','ducks','crooked','secretary','swift','frantic','panicky','dry','shaky','spell','grin','window','illfated','farm','pets','wail','addition','threatening','languid','bore','foot','mask','park','tender','flame','aquatic','simple','system','barbarous','macabre','fancy','overconfident','useless','money','amused','hurry','quick','play','slope','illegal','accessible','cracker','bake','fast','ugliest','zesty','far','lighten','manage','flagrant','bait','country','aback','license','mice','mark','tranquil','hard','flavor','design','amusement','overwrought','ludicrous','room','thrill','tough','kind','venomous','misty','work','roof','draconian','advertisement','oceanic','dinosaurs','hellish','suspend','day','futuristic','fumbling','flash','mouth','hobbies','prepare','unbecoming','scarf','file','troubled','hill','naive','badge','error','superficial','deep','unpack','plain','careful','porter','examine','numerous','drink','need','satisfy','lace','annoyed','idiotic','throne','condition','cub','honorable','pan','curly','pass','encouraging','playground','abaft','exist','mug','fly','stem','plot','solid','hanging','shy','connect','development','acidic','whip','tenuous','black','welltodo','pie','mean','industrious','doll','unhealthy','tacky','nosy','slippery','placid','tongue','girl','bewildered','round','book','measure','humor','mighty','decorate','chance','chunky','thank','summer','doubtful','amazing','panoramic','educate','pretend','elderly','wicked','remind','nonstop','gullible','corn','kick','stale','functional','card','ignore','request','certain','short','float','popcorn','judicious','tearful','standing','striped','party','ladybug','deserted','loose','flowers','unnatural','pull','smart','fertile','synonymous','cherry','tame','digestion','whistle','oranges','announce','wheel','crash','thinkable','puncture','imaginary','camera','volcano','notice','bell','obeisant','illinformed','knee','innate','gruesome','bustling','hesitant','practice','private','fang','locket','basin','rare','picayune','absent','sheep','cave','letter','impossible','shaggy','boiling','glue','rustic','raise','cemetery','land','yard','zonked','furniture','tacit','incandescent','yoke','ants','pastoral','one','shape','dazzling','earthquake','unadvised','angle','nod','appliance','desert','terrific','gaze','arrest','fit','head','gabby','snails','filthy','fade','store','planes','depressed','spicy','detailed','youthful','sun','complex','nostalgic','nerve','fortunate','dysfunctional','stimulating','freezing','contain','faulty','farflung','young','carry','trap','hall','hook','pink','charge','boil','ceaseless','stamp','gentle','check','rabid','top','abandoned','educated','muscle','growth','unlock','bouncy','son','reaction','theory','deranged','space','gleaming','ancient','delight','stuff','shade','peace','appreciate','bounce','honey','wipe','invention','malicious','relation','knowledge','noise','church','stranger','various','untidy','replace','discussion','tent','silent','cover','reply','slow','entertaining','anxious','wrench','weigh','juggle','lame','pop','sink','brash','sticky','rod','provide','squeal','erratic','icy','near','judge','scare','resolute','jail','grieving','teeny','pale','yarn','strange','nonchalant','aftermath','pricey','exchange','frequent','animated','stiff','coach','nauseating','decorous','quarter','supply','chess','lean','welloff','shake','laughable','sore','soothe','unequal','driving','violent','brief','plant','smell','resonant','female','cultured','attempt','unique','fail','preach','wide','gigantic','screw','egg','toothsome','wealthy','scream','limit','cagey','questionable','education','zany','guarded','key','hysterical','sloppy','sky','bubble','spoon','moaning','moan','perform','cool','memorize','abounding','structure','unused','dislike','squeak','truculent','cuddly','terrible','makeshift','woebegone','half','sulky','truthful','gainful','horse','dinner','morning','dashing','prick','faithful','crowded','basket','telephone','descriptive','bang','cycle','lunch','strap','waves','person','fasten','knife','righteous','flock','part','ink','straw','steadfast','crack','alcoholic','curved','carriage','inquisitive','heavy','frame','rush','disillusioned','settle','quaint','wrong','grotesque','hissing','rot','sharp','parsimonious','light','whimsical','disappear','maniacal','shiver','crowd','month','deeply','scarce','pin','kneel','detail','damp','obnoxious','puzzling','magnificent','transport','uneven','electric','cowardly','alike','food','delirious','bashful','clam','damaged','brick','curious','cobweb','jeans','cat','surround','statement','ordinary','call','acceptable','adventurous','ambiguous','fax','unequaled','nippy','noisy','flat','military','last','capricious','share','wakeful','sordid','embarrassed','clip','wild','nasty','plough','heap','caring','fetch','tray','worthless','man','identify','lush','destruction','rabbit','punch','open','voice','ruin','grape','canvas','yak','arrive','ultra','fixed','trousers','arch','lowly','hum','compare','stereotyped','rapid','precede','colour','combative','match','confess','nutritious','warlike','obey','wilderness','ghost','fruit','low','dock','steel','unsightly','price','switch','beneficial','lively','steep','glorious','alluring','punish','unkempt','hungry','rambunctious','talk','earthy','guitar','mass','note','addicted','stare','hospitable','neck','adorable','bury','hop','scorch','lake','repeat','pot','fairies','own','grab','amuck','enormous','noiseless','spiteful','bag','horn','excite','waggish','yielding','fry','thoughtless','long','expand','eight','rake','hunt','expert','whole','mammoth','cry','ambitious','stone','three','sock','place','second','ten','air','position','territory','doubt','duck','matter','pen','tour','claim','clever','thin','guide','relax','silver','baseball','string','amount','swanky','berserk','zipper','wrathful','ball','brainy','marble','lucky','eggs','prevent','drop','ragged','station','ahead','pretty','unwritten','bite','tub','plantation','flood','river','testy','ruthless','perfect','four','program','great','modern','pleasure','shop','psychotic','tickle','messy'];

const words = [drunk,
    save,
    faint,
    serve,
    soda,
    sip,
    puny,
    handy,
    copy,
    warn,
    dime,
    taboo,
    tip,
    cute,
    pat,
    rely,
    word,
    offer,
    shame,
    tank,
    back,
    boast,
    wall,
    seat,
    fence,
    cream,
    look,
    bent,
    size,
    jumpy,
    ugly,
    clap,
    boy,
    soft,
    wry,
    toys,
    water,
    gate,
    gun,
    uncle,
    groan,
    toe,
    use,
    shelf,
    step,
    ice,
    brush,
    spare,
    bath,
    saw,
    even,
    sense,
    scent,
    star,
    spill,
    early,
    road,
    cats,
    left,
    silk,
    coast,
    leg,
    null,
    angry,
    story,
    best,
    jolly,
    woman,
    slave,
    large,
    ajar,
    toad,
    nose,
    print,
    load,
    bump,
    peel,
    dusty,
    type,
    jar,
    pushy,
    rat,
    skate,
    lie,
    few,
    pray,
    scene,
    warm,
    board,
    blot,
    wrist,
    grip,
    trip,
    meaty,
    yummy,
    puffy,
    windy,
    birth,
    cause,
    crook,
    learn,
    knit,
    rob,
    chase,
    toes,
    alarm,
    end,
    wary,
    tooth,
    train,
    wink,
    oil,
    utter,
    agree,
    drown,
    zippy,
    berry,
    sleep,
    fuel,
    loss,
    joke,
    kill,
    truck,
    thaw,
    mint,
    bike,
    songs,
    bad,
    bow,
    dead,
    icky,
    woozy,
    admit,
    super,
    rail,
    list,
    haunt,
    snore,
    fear,
    past,
    lock,
    tail,
    dog,
    ducks,
    swift,
    dry,
    shaky,
    spell,
    grin,
    farm,
    pets,
    wail,
    bore,
    foot,
    mask,
    park,
    flame,
    fancy,
    money,
    hurry,
    quick,
    play,
    slope,
    bake,
    fast,
    zesty,
    far,
    bait,
    aback,
    mice,
    mark,
    hard,
    room,
    tough,
    kind,
    misty,
    work,
    roof,
    day,
    flash,
    mouth,
    scarf,
    file,
    hill,
    naive,
    badge,
    error,
    deep,
    plain,
    drink,
    need,
    lace,
    cub,
    pan,
    curly,
    pass,
    abaft,
    exist,
    mug,
    fly,
    stem,
    plot,
    solid,
    shy,
    whip,
    black,
    pie,
    mean,
    doll,
    tacky,
    nosy,
    girl,
    round,
    book,
    humor,
    thank,
    corn,
    kick,
    stale,
    card,
    short,
    float,
    party,
    loose,
    pull,
    smart,
    tame,
    wheel,
    crash,
    bell,
    knee,
    fang,
    basin,
    rare,
    sheep,
    cave,
    glue,
    raise,
    land,
    yard,
    tacit,
    yoke,
    ants,
    one,
    shape,
    angle,
    nod,
    gaze,
    fit,
    head,
    gabby,
    fade,
    store,
    spicy,
    sun,
    nerve,
    young,
    carry,
    trap,
    hall,
    hook,
    pink,
    boil,
    stamp,
    check,
    rabid,
    top,
    son,
    space,
    stuff,
    shade,
    peace,
    honey,
    wipe,
    noise,
    tent,
    cover,
    reply,
    slow,
    weigh,
    lame,
    pop,
    sink,
    brash,
    rod,
    icy,
    near,
    judge,
    scare,
    jail,
    teeny,
    pale,
    yarn,
    stiff,
    coach,
    chess,
    lean,
    shake,
    sore,
    brief,
    plant,
    smell,
    fail,
    wide,
    screw,
    egg,
    limit,
    cagey,
    zany,
    key,
    sky,
    spoon,
    moan,
    cool,
    half,
    sulky,
    horse,
    prick,
    bang,
    cycle,
    lunch,
    strap,
    waves,
    knife,
    flock,
    part,
    ink,
    straw,
    crack,
    heavy,
    frame,
    rush,
    wrong,
    rot,
    sharp,
    light,
    crowd,
    month,
    pin,
    kneel,
    damp,
    alike,
    food,
    clam,
    brick,
    jeans,
    cat,
    call,
    fax,
    nippy,
    noisy,
    flat,
    last,
    share,
    clip,
    wild,
    nasty,
    heap,
    fetch,
    tray,
    man,
    lush,
    punch,
    open,
    voice,
    ruin,
    grape,
    yak,
    ultra,
    fixed,
    arch,
    lowly,
    hum,
    rapid,
    match,
    obey,
    ghost,
    fruit,
    low,
    dock,
    steel,
    price,
    steep,
    talk,
    mass,
    note,
    stare,
    neck,
    bury,
    hop,
    lake,
    pot,
    own,
    grab,
    amuck,
    bag,
    horn,
    fry,
    long,
    eight,
    rake,
    hunt,
    whole,
    cry,
    stone,
    three,
    sock,
    place,
    ten,
    air,
    doubt,
    duck,
    pen,
    tour,
    claim,
    thin,
    guide,
    relax,
    ball,
    lucky,
    eggs,
    drop,
    ahead,
    bite,
    tub,
    flood,
    river,
    testy,
    four,
    great,
    shop,
    messy,
    ]
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}
   
app.set('view engine','ejs') 
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+"/public"))
 
 
app.use(generalRouter)

io.set('transports', ['websocket'])
io.on('connection',(socket)=>{

    // io.emit('test','hi')
    socket.on('join', ({username,room},callback)=>{
        username=username.trim()
        room=room.trim()
        if(room=="" || username==""){
           return  callback({error:"input fields can not be empty!"})
        }
        const isAdded = addUser(socket.id,username,room)
        const roomLength = getUsersInRoom(room).length
        if(username.length>20){
            return callback({error:"username length too large, must be less than 21 characters"})
        }
        if(room.length>20){
            return callback({error:"room length too large, must be less than 21 characters"})
        }
        if(isAdded==0)
        {
            return callback({error:'this username already exist in this room'})
        }
        if(roomLength>2){
            return callback({error:'this room is full'})
        }

        let testPara=""

        socket.join(room) 
        // console.log(username+" "+room)
        let t=getUser(socket.id) 
        // console.log(t)
        let userInRoom = getUsersInRoom(t.room)
        io.to(t.room).emit('updateRoomInfo',t,userInRoom)
        socket.broadcast.to(t.room).emit('connected',t.username+" joined the room!")
 
        io.set('transports', ['websocket'])
        socket.on('startTest',(noOfWords)=>{   
            // console.log(socket.id) 
            io.to(getUser(socket.id).room).emit('clear')
            let p="";    
            for(let i=0;i<noOfWords;++i) 
                p+=words[randomIntFromInterval(0,words.length-1)]+" ";
            p = p.trim()
            testPara = p  
            io.to(getUser(socket.id).room).emit('updateTestPara',testPara,noOfWords)
        })

        socket.on('updateLiveTyping',(userPara,testParaF)=>{ 
            let score=0
            testPara=testParaF
            let totalScore=testPara.length
            let mn=userPara.length      
            if(testPara.length<mn)
                mn=testPara.length
            for(let i=0;i<mn;++i){
                if(testPara[i]==userPara[i])
                    ++score;
            }
            if(score==totalScore){
                socket.broadcast.to(getUser(socket.id).room).emit('lose')
                socket.emit('win')
            }
            score=100*(score/totalScore)
            socket.broadcast.to(getUser(socket.id).room).emit('updateOpponentProgress',score)
            socket.emit('updateMyProgress',score)
            // console.log(userPara+" - "+testPara)    
        })

        socket.on('sendMessage',(msg,id)=>{
            let t=getUser(id)
            io.to(t.room).emit('showMessage',msg,t)
        })
    }) 
    socket.on('disconnect',(reason)=>{           
        let user = removeUser(socket.id)
        let userInRoom = getUsersInRoom(user.room)
        // console.log(reason)
        io.to(user.room).emit('updateRoomInfo',user,userInRoom)
        io.to(user.room).emit('disconnected',user.username+" left the room!")
    })

})      


app.get('*',(req,res)=>{
    res.send("<h1>404 page not found</h1>") 
})
let port = process.env.PORT || 3000     
server.listen(port,()=>{ 
    console.log('listening to port '+port) 
})