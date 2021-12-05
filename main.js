//creating a class
class Github {
    constructor() {
        this.client_id = 'a421eafdbb059d5e5a71';
        this.client_secret = '2d47bf58aaa857c72990eb04395fd1f57f1f33cd';
        this.repos_count = 4;
        this.repos_sort = 'created: asc'
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // 
        const profileData = await profileResponse.json();
        // 
        const reposData = await reposResponse.json();

        return {
            profileData,
            reposData
        }
    }
};