export default function Logout() {
    window.localStorage.removeItem('userdata');
    window.location.href = '/';
}