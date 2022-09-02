// the value cannot be changed with READONLY:
type User = {
    readonly id: number;
    username: string;
};

const user: User = {
    id: 12837,
    username: "catgurl",
};

console.log(user.id);
user.id;
