const AboutMe = () => {
    return (
        <div className="container text-white h-[500px] flex flex-col items-center">
            <h1 className="text-xl mt-3 border-b-4 border-white p-3 w-fit">
                "About Me"
            </h1> 
            <div className="content mt-4 text-justify overflow-y-scroll p-5 h-3/4 scrollbar-thin scrollbar-webkit">
                <div className="first-paragprah mb-3">
                    (14/05/2024) Hi, My name is <b>Tantowi Putra Agung Setiawan</b>, a recent Computer Science graduate from Bina Nusantara University. I finally (not officialy yet)
                    got my Bachelor degree in Computer Science after 3.5 years. As a freshmen, i found it really difficult to undersand algorithmic ways of thinking as i don't have any
                    prior knowledge of programming. Thankfully, i've got supportive friends whom motivated me alot to keep going and to enjoy the beauty of learning.
                </div>

                <div className="second-paragraph mb-3">
                    To be honest, I never expected to pursue this major, given that I had never coded anything before starting university. Initially, my goal was to attend medical school because of my proficiency in  biology. However, I failed my entrance test, which wasn't entirely surprising since I hadn't prepared well enough. I never considered a private university due to the high costs involved.  Consequently, I decided to pursue Computer Science as my major at Bina Nusantara University.
                </div> 

                <div className="third-paragraph mb-3">
                    Starting my first year, at least for me, it was hellish. I struggled so hard on both subject Algorithm and Programming and Program Design Method. I struggled so hard that i couldn't even solve or even create pseudocode that involves simple concept such as loop, multidimensional array, etc. At that time, i began doubting my decision since it felt like i'm just not cut out for this major. The only thing that kept me working is the amount of money that has already been spent to attend this major &#128517;.
                </div>

                <div className="fourth-paragraph mb-3">
                    I persisted in my struggles throughout the second semester. However, it was during this time that I reached a turning point. I finally made the decision to become more sincere and ask for help from my classmates. It was a pivotal moment when I realized that I wasn't alone in facing difficulties of this major. One thing that differentiate me to some of them is that, they don't easily give up because they know they'll eventually make it and they pursue this major with passion so the process doesn't end up as a burden. I decided to become friends with them, adapting their ways of learning and thinking. As time goes on, the burden i felt in my first-year slowly disipate and i began to find my ways of doing things.
                </div>

                <div className="fifth-paragraph mb-3">
                    After all, I wouldn't claim to have accomplished ground-breaking achievements. However, the past 3.5 years have taught me to loosen up and appreciate the process. It's true that I'm still far from perfect. The thought of being left behind still kicks in these days, especially when I encounter problems beyond my limits. But I'm glad that these experiences have shaped me into the person I am today. At least, i know that i'm becoming a better person everyday.
                </div>

                <div className='sixth-paragraph mb-3'>
                    At the end, I would like to express my heartfelt gratitude to my friends who have supported me through every hardship. Their encouragement and assistance have been invaluable, and I am deeply thankful for their unwavering friendship
                </div>

                <div className='seventh-paragraph mb-3'>
                    PS: I really am sorry if there are several grammar error that's bugging you. Tbh i'm still learning to communicate in english properly. Therefore, please don't judge me &#128517; 
                </div>
            </div>
        </div>
    )
}

export default AboutMe