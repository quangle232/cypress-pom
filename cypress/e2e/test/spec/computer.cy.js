import HomePage from "../pages/home-page"
import AddNewComputer from "../pages/add-new-computer-page"

const homePage = new HomePage()
const addNewComputerPage = new AddNewComputer

describe('Basic Functions', () => {

  before(()=>{
    cy.visit('https://computer-database.herokuapp.com/computers')
  })

  it('should be able to create new computer', () => {
    cy.fixture("new-computer-info.json").then((newComputerInfo) => {
      
      const newComputerName = `${newComputerInfo["computerName"]}_${Math.floor(Math.random() * 100000)}`
      homePage.clickOnAddNewButton()
              .addNewComputer(newComputerName, newComputerInfo["introducedDate"], newComputerInfo["discontinuedDate"], newComputerInfo["company"])
              .isAddNewMessageSuccessfullyDisplay(newComputerName)
              .filterComputer(newComputerName)
              .isComputerDisplaySuccessfully(newComputerInfo)
    })
    
  })

  it('should be able to delete a computer', () => {
    cy.fixture("new-computer-info.json").then((newComputerInfo) => {
      const newComputerName = `${newComputerInfo["computerName"]}_${Math.floor(Math.random() * 100000)}`
      homePage.clickOnAddNewButton()
              .addNewComputer(newComputerName, newComputerInfo["introducedDate"], newComputerInfo["discontinuedDate"], newComputerInfo["company"])
              .isAddNewMessageSuccessfullyDisplay(newComputerName)
              .filterComputer(newComputerName)
              .selectComputerByName(newComputerName)
              .deleteComputer()
              .isComputerDeletedSuccessfullyMessageDisplay()
              .filterComputer(newComputerName)
              .isComputerDeleted()

    })
  })

  it('should be able to update computer', () => {
    cy.fixture("updated-computer-info.json").then((updateComputerInfo) => {
      const newComputerName = `${updateComputerInfo["computerName"]}_${Math.floor(Math.random() * 100000)}`
      const updateName = `${updateComputerInfo["updateName"]}_${Math.floor(Math.random() * 100000)}`
      homePage.clickOnAddNewButton()
              .addNewComputer(newComputerName, updateComputerInfo["introducedDate"], updateComputerInfo["discontinuedDate"], updateComputerInfo["company"])
              .isAddNewMessageSuccessfullyDisplay(newComputerName)
              .filterComputer(newComputerName)
              .selectComputerByName(newComputerName)
              .updateInformation({computerName: updateName, company:updateComputerInfo["updateCompany"]})
              .isUpdateSuccessfullyMessageDisplay(updateName)
              .filterComputer(updateName)
              .isComputerDisplaySuccessfully({computerName: updateName, company:updateComputerInfo["updateCompany"]})

    })
  })

  after(() => {
    // clean up test data

  })
})


