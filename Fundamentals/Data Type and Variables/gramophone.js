function gramophone(band, album, song){

    let timeForAll = (album.length * band.length) * song.length / 2
    let rotation = Math.ceil(timeForAll / 2.5)
    console.log(`The plate was rotated ${rotation} times.`);
}