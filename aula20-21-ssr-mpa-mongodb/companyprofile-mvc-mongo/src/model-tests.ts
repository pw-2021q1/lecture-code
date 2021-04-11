import * as dbConnect from "./db-connection"
import * as model from "./model"

const profiles = [
    new model.UserProfile(
        "joao silva",
        1992,
        'professional surfing',
        '<b>Joao Silva</b> is one the top surfers in Brazil.'),
    new model.UserProfile(
        "maria santos",
        1987,
        'customer relationship management',
        '<em>Maria Santos</em> is a workaholic who loves cats.'
    )
]

async function testInsert() {
    for (const profile of profiles) {
        const status = 
            await model.UserProfileDAO.getInstance().insert(profile)

        console.log('Inserting element.');
        console.log(`Status: ${status}`);
    }
}

async function testList() {
    const profiles = await model.UserProfileDAO.getInstance().listAll()

    console.log('Listing all elements')
    console.log(profiles)
}

async function testFindById() {
    const idSuccess = 2
    const idFailure = 50

    console.log("Positive test: ")

    const profile = await model.UserProfileDAO
        .getInstance().findById(idSuccess)

    console.log('Restrieved profile: ');
    console.log(profile);

    console.log("Negative test: ")

    try {
        const profile = await model.UserProfileDAO
            .getInstance().findById(idFailure)

        console.log('Restrieved profile: ');
        console.log(profile);
    } catch(error) {
        throw Error("Expected error thrown. Passed.")
    }
}

async function testUpdate() {
    const id = 2

    console.log(`Retrieving profile id ${id}`)

    const profile = await model.UserProfileDAO
        .getInstance().findById(id)
    
    console.log("Positive case: ")
    
    profile.name = "Mariana Silva"
    console.log(`Updating profile id ${id}`)
    
    const statusPositive = await model.UserProfileDAO.getInstance().update(profile)

    console.log(`Status: ${statusPositive}`)

    console.log("Negative case: ")

    profile.id = 200
    console.log(`Updating profile id ${id}`)
    
    const statusNegative = await model.UserProfileDAO.getInstance().update(profile)

    console.log(`Status: ${statusNegative}`)
}

async function testRemove() {
    const idPositive = 3
    const idNegative = 200
    
    console.log("Positive case: ")
    
    console.log(`Removing profile id ${idPositive}`)
    
    const statusPositive = await model.UserProfileDAO.getInstance()
        .removeById(idPositive)

    console.log(`Status: ${statusPositive}`)

    console.log("Negative case: ")

    console.log(`Removing profile id ${idNegative}`)
    
    const statusNegative = await model.UserProfileDAO.getInstance()
        .removeById(idNegative)

    console.log(`Status: ${statusNegative}`)
}

async function main() {
    try {
        await dbConnect.connect()

        await testInsert()
        // await testList()
        // await testFindById()
        // await testUpdate()
        // await testRemove()
    } catch (error) {
        console.log(error)
    } finally {
        await dbConnect.disconnect()
    }
}

main()
