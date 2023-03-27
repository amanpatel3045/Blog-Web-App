# Rest API me login ka controller banane me ye error aa rha




```
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }
  
    res.status(200).json(user);
  } catch (err) {
    console.log("aman", err);
    res.status(500).json(err);
  }
});
```
# Above code me login successfull hone pe response me pura data mil jata tha like email, password,img etc
# but we want ki response me password na mile toh iske liye hm spread operator ka use krenge object destructuring me
# Like this =>  const { password, ...others } = user
# ab response me others pass kr denge bcz others me pass store nhi hai
# like this =>  res.status(200).json(others);

```
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }
    const { password, ...others } = user_doc;
    res.status(200).json(others);
  } catch (err) {
    console.log("aman", err);
    res.status(500).json(err);
  }
});
```

# Now thunder client me check kiya /login krke toh response me kuchh alg aa rha tha
# like this bellow 
```
{
  "$__": {
    "activePaths": {
      "paths": {
        "password": "init",
        "email": "init",
        "username": "init",
        "profilePic": "init",
        "_id": "init",
        "createdAt": "init",
        "updatedAt": "init",
        "__v": "init"
      },
      "states": {
        "require": {},
        "default": {},
        "init": {
 ```
 
 # But yeh error aane ka reason stackoverflow me mila which are as follows

 _doc exist on the mongoose object.

Because mongooseModel.findOne returns the model itself, the model has structure (protected fields).
When you try to print the object with console.log it gives you only the data from the database, because console.log will print the object public fields.

If you try something like JSON.stringify then you get to see inside the mongoose model object. (_doc, state ...)

In the case where you want to add more fields in the object and it's not working

const car = model.findOne({_id:'1'})
car.someNewProp = true // this will not work
If later you set the property to the object car and you didn't specify in the Model Schema before then
Mongoose model is validating if this field exists and if it's the valid type. If the validation fails then the property will not be set.


# TO OVERCOME THIS 
# _doc ka use kro
# object destructuring me jo user likha hai uske bgl me _doc likh do
# like this =>  const { password, ...others } = user_doc;
# now res k json me others likh do like this =>  res.status(200).json(others);

# Whole code after correction

```
//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(400).json("Wrong credentials!");
    }

    const validated = await bcrypt.compare(req.body.password, user.password);
    if (!validated) {
      return res.status(400).json("Wrong credentials!");
    }
    const { password, ...others } = user_doc;
    res.status(200).json(others);
  } catch (err) {
    console.log("aman", err);
    res.status(500).json(err);
  }
});
```


# SOLUTION LINK => https://stackoverflow.com/questions/18821212/mongoose-whats-up-with-doc
