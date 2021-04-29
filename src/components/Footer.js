export default function Footer(){
    let year = new Date().getFullYear();
    return (
        <div id="footer">
            <h5>Copyright © {year} Pio</h5>
        </div>
    );
}