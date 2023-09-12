class GDPR {

    constructor() {
        this.showContent();
        this.bindEvents();
        if((this.getCookie("consent") !== 'accept')) this.showGDPR();
    }

    bindEvents() {
        let buttonAccept = document.querySelector('.gdpr-consent__button--accept');
        buttonAccept.addEventListener('click', () => {
            this.setCookie("consent","accept", 1);
            this.showContent();
            this.hideGDPR();
        });

        let buttonReject = document.querySelector('.gdpr-consent__button--reject');
        buttonReject.addEventListener('click', () => {
            this.setCookie("consent", "reject", 1);
            this.showContent();
            this.hideGDPR();
        });
    }

    showContent() {
        this.resetContent();
        const status = this.getCookie("consent") === "" ? 'not-chosen' : this.getCookie("consent")
        const element = document.querySelector(`.content-gdpr-${status}`);
        element.classList.add('show');

    }

    resetContent(){
        const classes = [
            '.content-gdpr-accept',
            '.content-gdpr-not-chosen',
            '.content-gdpr-reject'];

        for(const c of classes){
            document.querySelector(c).classList.add('hide');
            document.querySelector(c).classList.remove('show');
        }
    }

    hideGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('hide');
        document.querySelector(`.gdpr-consent`).classList.remove('show');
    }

    showGDPR(){
        document.querySelector(`.gdpr-consent`).classList.add('show');
    }

    // https://www.w3schools.com/js/js_cookies.asp
    getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for(let i = 0; i <ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) === 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

}

const gdpr = new GDPR();

