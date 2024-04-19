import Player from "./player";

let P1;
let CPU;

beforeAll(() => {
    P1 = new Player(1);
    CPU = new Player(2);
})

afterAll(() => {
    P1 = null;
    CPU = null;
})

test ("player exists", () => {
    expect(Player).toBeDefined();
})
