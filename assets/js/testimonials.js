class Testimonial {
    auth = ""
    constructor(quote, image) {
        this._quote = quote
        this._image = image
    }

    get quote() {
        return this._quote
    }

    get image() {
        return this._image
    }

    set author(value){
        this.auth = value
    }

    get html() {
        if (this.author === undefined){
            // console.log("This author is not setted by AuthorTestimonial nor CompanyTestimonial but setted by class setter.) 
        }else{
            this.auth = this.author
        }
        return `<div class="testimonial">
            <img src="${this.image}" class="profile-testimonial" />
            <p class="quote">"${this.quote}"</p>
            <p class="author">- ${this.auth}</p>
        </div>`
    }
}

class AuthorTestimonial extends Testimonial {
    constructor(author, quote, image) {
        super(quote, image)
        this._author = author
    }

    get author() {
        return this._author
    }
}

class CompanyTestimonial extends Testimonial {
    constructor(company, quote, image) {
        super(quote, image)
        this._company = company
    }

    get author() {
        return this._company + " Company"
    }
}

const testimonial1 = new AuthorTestimonial("Elon Musk", "I Like it", "https://cdn.britannica.com/05/236505-050-17B6E34A/Elon-Musk-2022.jpg")
const testimonial2 = new AuthorTestimonial("warren buffett", "excellent ", "https://img-cdn.inc.com/image/upload/w_1920,h_1080,c_fill/images/panoramic/GettyImages-96962297_526783_jgxnqo.jpg")
const testimonial3 = new AuthorTestimonial("Jeff bezos", "5 star for you", "https://statik.tempo.co/data/2021/02/03/id_998068/998068_720.jpg")
const testimonial4 = new CompanyTestimonial("Pertamina", "Pasti pass", "https://t-2.tstatic.net/jogja/foto/bank/images/gaji-karyawan-pertamina-terkini.jpg")
const testimonial5 = new CompanyTestimonial("KFC", "Mantep banget", "https://cdn.kfc.com.my/dinein.kfc.com.my/images/join-us/by-people-for-people-01.png")

const testimonial6 = new Testimonial("Nice", "https://i0.wp.com/rayhaber.com/wp-content/uploads/2020/07/morgan-freeman-kimdir.jpg?fit=1424%2C800&ssl=1")
testimonial6.author = "Morgan Freeman"

let testimonialData = [testimonial1, testimonial2, testimonial3, testimonial4 , testimonial5 , testimonial6 ]
let testimonialHTML = "";

for (let i = 0; i < testimonialData.length; i++) {
    testimonialHTML += testimonialData[i].html
}

document.getElementById("testimonials").innerHTML = testimonialHTML



