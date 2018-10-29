export const FBLoadAPI = (d, s, id) => {
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  const fbjsAPI = d.createElement(s); fbjsAPI.id = id;
  if (fbjsAPI.readyState) {  // IE
    fbjsAPI.onreadystatechange = () => {
      if (fbjsAPI.readyState === "loaded" || fbjsAPI.readyState === "complete") {
        fbjsAPI.onreadystatechange = null;
        window.ExternalAPILoaded("fb");
      }
    };
  } else {  // Others
    fbjsAPI.onload = () => {
      window.ExternalAPILoaded("fb");
    };
  }
  fbjsAPI.src = 'https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v3.2&appId=249307139270167&autoLogAppEvents=1';
  fjs.parentNode.insertBefore(fbjsAPI, fjs);
}

export const GMapLoadAPI = (d, s, id) => {
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  const gMapjs = d.createElement(s); gMapjs.id = id;
  if (gMapjs.readyState) {  // IE
    gMapjs.onreadystatechange = () => {
      if (gMapjs.readyState === "loaded" || gMapjs.readyState === "complete") {
        gMapjs.onreadystatechange = null;
        window.ExternalAPILoaded("google");
      }
    };
  } else {  // Others
    gMapjs.onload = () => {
      window.ExternalAPILoaded("google");
    };
  }
  gMapjs.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAlZd4JOlNny82tPQheGT2EN9SZepk4Ues';
  fjs.parentNode.insertBefore(gMapjs, fjs);
}