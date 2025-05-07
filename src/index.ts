import { toQR } from "./toQR";


// sigue haciendo qrs y encripta

async function test() {
    try {
        const qr = await toQR({encrypt: false, returnType: "svg", data: "test"});
        console.log(qr)
    } catch (error) {
        console.error("Error:", error);  
    }
}

void test();



export { toQR };