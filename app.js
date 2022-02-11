const testimonailContainer = document.querySelector('.testimonial-container');
const testimonail = document.querySelector('.testimonial');
const UserImage = document.querySelector('.user-img');
const UserName = document.querySelector('.user-name');
const UserRole = document.querySelector('.user-role');

const testimonials = [
    {
        name:"John Doe",
        position:"Graphic Design",
        image:"https://randomuser.me/api/portraits/men/33.jpg",
        text:" is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also th"
    },
    {
        name:"Mary Ivan",
        position:"Marketing",
        image:"https://randomuser.me/api/portraits/women/33.jpg",
        text:"using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versi"
    },
    {
        name:"Harry Walker",
        position:"Security",
        image:"https://randomuser.me/api/portraits/men/36.jpg",
        text:"popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage"
    },
    {
        name:"Sasha Holmes",
        position:"Web Development",
        image:"https://randomuser.me/api/portraits/women/46.jpg",
        text:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the c"
    },

]


let idx = 1;

function updateTestimonial() {
    const {name, position, image, text} = testimonials[idx]
    testimonail.innerHTML = text;
    UserImage.src = image;
    UserName.innerHTML = name;
    UserRole.innerHTML = position;

    idx ++;

    if(idx > testimonials.length -1) {
        idx = 0;
    }
}

setInterval(updateTestimonial, 10000)