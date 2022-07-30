// Many objects can subscribe to events broadcasted by one object.
import { Subject } from "rxjs"

const  news = new Subject();

const tv1 = news.subscribe(v => console.log(v + "\n\t via All India Radio"))
const tv2 = news.subscribe(v => console.log(v + "\n\t via Door Darshan"))
const tv3 = news.subscribe(v => console.log(v + "\n\t via NDTV"))

news.next('Breaking news: ')
news.next('The war is over ')

// Observer is a push-based system