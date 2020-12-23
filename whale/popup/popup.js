const JBNUHomeURL = "http://https://www.jbnu.ac.kr";
const PotalURL = "http://portal.jbnu.ac.kr";
const GitRepoURL = "https://github.com/seohyun0120/quick-sook";
const OasisURL = "https://all.jbnu.ac.kr/jbnu/oasis";
const CalURL = "https://www.jbnu.ac.kr/kor/?menuID=19";
const MapURL = "https://map.kakao.com/?urlX=529230.0&urlY=652585.0&itemId=11335152&q=%EC%A0%84%EB%B6%81%EB%8C%80%ED%95%99%EA%B5%90%20%EC%A0%84%EC%A3%BC%EC%BA%A0%ED%8D%BC%EC%8A%A4&srcid=11335152&map_type=TYPE_MAP&from=roughmap";
const LibraryURL = "https://dl.jbnu.ac.kr/";
const lunchroomURL = "http://sobi.chonbuk.ac.kr/chonbuk/m040101";

function openURLInNewTab(url) {
    whale.tabs.create({ url });
}

document.getElementById('clickJBNU').addEventListener('click', () => { openURLInNewTab(JBNUHomeURL) }, false);
document.getElementById('clickPotal').addEventListener('click', () => { openURLInNewTab(PotalURL) }, false);
document.getElementById('clickGitRepo').addEventListener('click', () => { openURLInNewTab(GitRepoURL) }, false);
document.getElementById('clickOasis').addEventListener('click', () => { openURLInNewTab(OasisURL) }, false);
document.getElementById('clickCalendar').addEventListener('click', () => { openURLInNewTab(CalURL) }, false);
document.getElementById('clickMap').addEventListener('click', () => { openURLInNewTab(MapURL) }, false);
document.getElementById('clickLibrary').addEventListener('click', () => { openURLInNewTab(LibraryURL) }, false);
document.getElementById('clickLunchroom').addEventListener('click', () => { openURLInNewTab(lunchroomURL) }, false);