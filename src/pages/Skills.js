import Menu from '../components/Menu';
import './Skills.css';

export default function Skills(){

    const skills = [
        {id: 0, skillName: 'HTML', average: '70%'},
        {id: 1, skillName: 'CSS', average: '70%'},
        {id: 2, skillName: 'JavaScript', average: '60%'},
        {id: 3, skillName: 'React', average: '60%'},
        {id: 4, skillName: 'NodeJS', average: '50%'},
        {id: 5, skillName: 'MongoDB', average: '50%'},
        {id: 6, skillName: 'Wordpress', average: '50%'},
        {id: 7, skillName: 'Photoshop', average: '60%'},
        {id: 8, skillName: 'Illustrator', average: '60%'},
        {id: 9, skillName: 'InDesign', average: '60%'},
        {id: 10, skillName: 'Premiere', average: '60%'}
    ];

    let skillsContent = skills.map(item => {
        return (
            <div key = {item.id} className = "bar">
                <div id ="bar-fill" className ="fill scale-in-hor-left" style = {{width : item.average}}></div>
                <div className = "skill-name">{item.skillName}</div>
                <span>{item.average}</span>
            </div>
            );
    }
    );

    return (
        <section id="skills">
            <div className="menu-w"><Menu/></div>
            <div id="skills-container" className="page-container">
                <div id="skills-txt" className="slide-in-right">
                    <p>As <b>Team player</b> I usually share the work with colleagues using platforms like <b>GitHub</b>, <b>Slack</b> and <b>Figma</b>. However I am always open and have the pleasure of learning new ones in order to achieve the <b>Team target</b>. </p>
                </div>
                <div id='skills-chart' className="slide-in-right">
                    {skillsContent}
                </div>
            </div>
        </section>
    );
}