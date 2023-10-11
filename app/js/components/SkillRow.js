class SkillRow extends HTMLElement {
    shadowRoot;

    constructor() {
        super();
        this.shadowRoot = this.attachShadow({mode:'open'})
        const Title = document.createElement('h2');
        Title.setAttribute('class','profile-content__category-title');
        Title.innerHTML('Test');
        const ProfileContent = document.createElement('div');
        ProfileContent.setAttribute('class','profile-content__category');
        ProfileContent.appendChild(Title);
        this.shadowRoot.appendChild(ProfileContent)
    }
}

customElements.define('skill-row','SkillRow')