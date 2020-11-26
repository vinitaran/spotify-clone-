export const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "122d277ee82444d1a7e6ff3445a158fc";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenUrl = () => {
  //#access_token=BQDojAaJP-G0heI2EMu9kZ3wgGbxVxpO7UBEsoCBlrenohKlFkngWfXNxkMwJgEWVxZouHK265CVpbAHBUswryGIDSSAv1kcrh8_Q-iB1X8wdg1G5kbJAsmkPnWa2puVi0A8G8z9Ve2yulOanDSf7fsIvdeu5MZ0mIrXiLpt6ypDbzazG9Yu&token_type=Bearer&expires_in=3600
  return window.location.hash
    .substring(1) //get the first substring
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dailog=true`;
