function Time() {
    //let date = new Date().toLocaleString() + ""
    const now = new Date() ;
    const timeString = now.toLocaleTimeString(); //Get only the time 
    return(
        <h2>
            {timeString}
        </h2>
    );
}

export default Time;