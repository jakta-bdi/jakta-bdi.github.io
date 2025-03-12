import React from "react";
import authors from "../../blog/authors.yml"; // Adjust path if needed
import Layout from '@theme/Layout';
import { Icon } from "@iconify/react/dist/iconify.js";


const AuthorsList: React.FC = () => {
    return (
        <Layout title="Team" description="Meet the team behind JaKtA">
            <main className="container">
                <div className="row" style={{ justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
                    <h1>Meet the JaKtA team</h1>
                </div>
                <div className="row">
                    {Object.entries(authors).map(([key, author]: [string, any]) => (
                        <div key={key} className="col col--3" style={{ textAlign: 'center', marginBottom: '20px' }}>
                            <img 
                                src={author.image_url} 
                                alt={author.name} 
                                width="80%" 
                                style={{ borderRadius: '50%', objectFit: 'cover' }} 
                            />
                            <p>
                                <strong>{author.name}</strong>
                                <br></br>
                                {author.title}
                                <br></br>
                                <a href={`https://github.com/${author.socials.github}`} aria-label={`${author.name}'s GitHub`}>
                                <Icon icon="mdi:github" style={{ fontSize: '24px' }} />
                            </a>
                            </p>
                           
                        </div>
                    ))}
                </div>
                <div className="row" style={{ justifyContent: 'center', textAlign: 'justify', padding: '1r0px' }}>
                    <h2>About us</h2>
                    
                </div>
                <section className="row" style={{justifyContent: 'center', textAlign: 'center', padding: '20px' }}>
                    <p className="text-lg">
                    We are a group of researchers from the  
                    <a 
                        href="https://www.unibo.it/en" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                    > University of Bologna</a>,  
                    in the  
                    <a 
                        href="https://disi.unibo.it/it" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                    > Department of Computer Science and Engineering (DISI)</a>,  
                    based in Cesena, Italy <Icon inline={true} icon="twemoji:flag-italy" />
                    </p>
                    <p>
                    Our passion? Multi-agent systems, software engineering and and artificial intelligence   <Icon inline={true} icon="twemoji:robot"/> <Icon inline={true} icon="twemoji:brain"/>
                    !  
                    </p>

                    <p className="text-lg">
                    We are committed to develop JaKtA,  
                    our open-source Belief-Desire-Intention (BDI) framework, powered by Kotlin.
                    </p>
                    <p>
                    We built it to make agent-based programming smarter, scalable, and more intuitive <Icon inline={true} icon="twemoji:rocket"/>
                    </p>

                    <p className="text-lg">
                    We actively collaborate with the scientific community and welcome contributions  
                    to push the boundaries of  
                    agent-oriented programming!
                    </p>

                    <p>
                        Discover more about what we and our colleagues do on the  
                        <a 
                        href="https://pslab-unibo.github.io/"
                        > Pervasive Software Lab </a>
                        website!
                    </p>
                </section>
            </main>
        </Layout>
    );
};

export default AuthorsList;