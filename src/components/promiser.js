export default async (promise, subscriber)=>{
    //console.log('promiser started');
    subscriber(true)
    try {
        await promise;
        //console.log('promiser completed');
    } catch (err) { console.log('promiser aborted'+err)}
    subscriber(false);
}