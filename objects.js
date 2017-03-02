var playlist={name: "title"}

function updatePlaylist(playlist,name,song){

playlist[name]=song
return playlist
}

function removeFromPlaylist(playlist, name){
  delete playlist[name]
  return playlist
}
