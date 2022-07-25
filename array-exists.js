function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return 'please provide right array';
    }
    let mega = friends[0];
    for (const i of friends) {
        if (i.length > mega.length)
            mega = i;
    }
    return mega;

}

const friends = ['abul', 'nakul', 'kabul', 'ratul'];
const myBigGuy = megaFriend(36556);
console.log(myBigGuy);
if (friends.indexOf('abul' != -1)) {
    console.log("abul ace");
}
if (friends.includes('ratul')) {
    console.log(" ace");
}
