export {}

function showMyName(name: string): void {
    console.log(name)
  }
  
  showMyName('John')
  
  function square(a: number): number {
    return a * a
  }
  
  square(10)
  
function sum(title: string, ...numbers: number[]): string | void {
    return title + ' = ' + numbers.reduce((sum, num) => sum + num, 0)
  }
  
  sum('Numbers', 1, 6, 10)

  
  function executeFunc(func:(title: string, age: number, hobbies: string[]) => boolean) {
    const title: string = 'Lorem Ipsum';
    const age: number = 24;
    const hobbies: string[] = ['Sport', 'Movies'];
    func(title, age, hobbies)
}
  
  executeFunc((title, age, hobbies) => { return true })