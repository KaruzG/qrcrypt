interface TestParams {
    a: number;
    b: number;
}

export function test(params: TestParams): number {
    return params.a + params.b;
}