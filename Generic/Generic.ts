// Bài 1: Tạo một hàm Generic đơn giản
// Viết một hàm identity nhận vào một tham số và trả về chính tham số đó.
// Sử dụng Generic để đảm bảo rằng kiểu của tham số đầu vào và kết quả trả về là giống nhau.

function identity<T>(value: T): T {
    return value;
}

// Bài 2: Generic với mảng
// Tạo một hàm getFirstElement nhận vào một mảng và trả về phần tử đầu tiên của mảng đó.
// Sử dụng Generic để đảm bảo rằng kiểu của phần tử đầu vào và kết quả trả về là giống nhau.

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

// Bài 3: Ràng buộc kiểu với Generic
// Viết một hàm merge sử dụng Generic để kết hợp hai đối tượng lại với nhau.
//     Ràng buộc kiểu của các tham số đầu vào là object.

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
    return {...obj1, ...obj2};
}


// Bài 4: Generic Interface
// Tạo một interface KeyValuePair sử dụng Generic để biểu diễn một cặp key-value.
// Sau đó, viết một hàm displayKeyValuePair để hiển thị cặp key-value này.

interface KeyValuePair<K, V> {
    key: string;
    value: V;
}

function displayKeyValuePair<K, V>(pair: KeyValuePair<K, V>): void {
    console.log(pair.key)
    console.log(pair.value)
}

const testV1: KeyValuePair<string, object> = {
    key: "4324",
    value: {
        dsd: 132
    }
}


// Bài 5: Generic và điều kiện kiểu
// Viết một hàm extractType sử dụng Generic với điều kiện kiểu (extends) để chỉ trả về
// kiểu của thuộc tính type nếu đối tượng đầu vào có thuộc tính đó, nếu không thì trả về never.

type GetType<T> = T extends { type: infer U } ? U : never;
type A = { type: string };
type TypeOfA = GetType<A>;

// Bài tập 2: Generic Array
// Tạo một hàm generic tên là "reverseArray" để đảo ngược thứ tự của một mảng bất kỳ.
// Ví dụ: reverseArray([1, 2, 3]) => [3, 2, 1]

function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
}

// Bài tập 4: Generic với nhiều kiểu dữ liệu
// Tạo một hàm generic nhận vào hai tham số có kiểu khác nhau và trả về một mảng chứa hai giá trị đó.
// Thử gọi hàm với các kiểu dữ liệu khác nhau.

function makePair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

// Bài tập 5: Generic Constraints
// Tạo một hàm generic chỉ cho phép các đối tượng có thuộc tính "length".
// Hàm này sẽ nhận vào một đối tượng có thuộc tính "length" và trả về giá trị của thuộc tính đó.

function getLength<T extends { length: number }>(value: T): number {
    return value.length;
}

// Bài tập 6: Generic Class
// Tạo một lớp generic tên là "Stack" có thể thêm vào và loại bỏ phần tử từ một ngăn xếp.
// Cung cấp các phương thức "push", "pop" và "peek" để làm việc với ngăn xếp.

class Stack<T> {
    private items: T[] = []

    push(element: T): void {
        this.items.push(element);
    }

    pop(element: T): T {
        return this.items.pop();
    }

    peek(): T {
        return this.items[this.items.length - 1];
    }
}

const stringStack = new Stack<string>();

// Bài tập 7: Generic và Enum
// Tạo một enum cho các trạng thái "Loading", "Success", "Error".
// Tạo một generic để sử dụng với các kiểu dữ liệu khác nhau cho từng trạng thái này.

enum Status {
    Loading = "Loading",
    Success = "Success",
    Error = "Error"
}

interface State<T> {
    status: Status;
    data?: T;
    error?: string;
}

const loadingState: State<null> = {
    status: Status.Loading
};

//@todo Bài tập 8: Generic Utility Types
// Sử dụng các kiểu generic utility có sẵn như Partial, Readonly, Pick, Record.
// Tạo một vài ví dụ minh họa cho từng kiểu.

interface User {
    id: number;
    name: string;
    email: string;
}

const updateUser = (user: Partial<User>) => {
    console.log("Updated user:", user);
};

interface User {
    id: number;
    name: string;
    email: string;
}

const user: Readonly<User> = {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
};

// Record<K, T> tạo ra một kiểu đối tượng trong đó các key là kiểu K, và giá trị là kiểu T
type Role = "admin" | "user" | "guest";

const userRoles: Record<Role, number> = {
    admin: 1,
    user: 2,
    guest: 3,
};

// console.log(userRoles.admin);
// console.log(userRoles["guest"]);


// Bài tập 9: Generic với React (nếu bạn biết React)
// Tạo một component generic trong React nhận vào một danh sách các phần tử với kiểu bất kỳ.
// Hiển thị danh sách các phần tử trong một bảng.

// import React from 'react';
//
// const Generic = () => {
//     return (
//         <div>
//
//             </div>
//     );
// };
//
// export default Generic;

// Bài tập 10: Advanced Generic Constraints
// Tạo một hàm generic chỉ cho phép các kiểu là mảng hoặc đối tượng.
// Nếu là mảng, trả về số lượng phần tử. Nếu là đối tượng, trả về số lượng thuộc tính.
