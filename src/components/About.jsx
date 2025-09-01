// components/About.jsx
const About = () => {
    return (
        <section className="about" id="about">
            <div className="container">
                <div className="section-title fade-in">
                    <h2>About Me</h2>
                    <p>Get to know more about my skills, experience, and what I do</p>
                </div>

                <div className="about-grid">
                    <div className="about-content fade-in">
                        <h3>Web Developer & AI Enthusiast</h3>
                        <p>Hey! I’m Shaurya Kumar Singh, a final-year CSE (AIML) student who loves turning ideas into real projects with code. I enjoy working with Python, Java, React, and SQL, and I’m always curious about how tech can solve everyday problems.
                            Right now, I’m exploring data analysis, machine learning, and full-stack development, and I like building projects that help me learn by doing. Outside of coding, I enjoy experimenting with new tools, learning something new every day, and collaborating with people who share the same passion for tech.</p>
                        <p>When I'm not coding, you can find me Playing football, reading tech blogs, or experimenting with new design tools and framework.</p>

                        <div className="skills">
                            <span className="skill">HTML</span>
                            <span className="skill">CSS</span>
                            <span className="skill">JavaScript</span>
                            <span className="skill">React</span>
                            <span className="skill">Git</span>
                            <span className="skill">Responsive Design</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;