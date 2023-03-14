@media only screen and (max-width: 768px) {
    .header {
      height: 50px;
    }
  
    .header .menu {
      position: absolute;
      top: 50px;
      left: 0;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 10px 20px;
      gap: 10px;
      background-color: #FFFFFF;
      box-shadow: 0px 4px 20px 5px rgba(184, 184, 184, 0.2);
      transform: translateX(-100%);
      transition: transform 0.3s ease-in-out;
    }
  
    .header .menu.collapsed {
      transform: translateX(0%);
    }
  
    .header .menu-item {
      font-size: 16px;
      line-height: 19px;
    }
  
    .header .menu-toggle {
      display: block;
      font-size: 24px;
      color: #000000;
      background-color: #FFFFFF;
      border: none;
      padding: 0;
      cursor: pointer;
      margin: 0 20px;
    }
  }






  <style>
  .header {
    position: fixed;
    width: 100%;
    height: 60px;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px 5px rgba(184, 184, 184, 0.2);
  }
  
  .header .menu-toggle {
    display: none;
  }
  
  .header .menu {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0;
    gap: 20px;
  }  
  
  .header .menu-item {
    color: #000000;
    font-family: Arial;
    font-size: 18px;
    line-height: 21px;
    cursor: pointer;
  }
  
  
</style>
 .menu {
  max-width: 320px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
  gap: 10px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 20px 5px rgba(184, 184, 184, 0.2);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 2;
}



<style>
.header .menu-container {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  flex-grow: 1;
  height: 100%;
}

.header .menu {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px;
  gap: 10px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 20px 5px rgba(184, 184, 184, 0.2);
  transition: transform 0.3s ease-in-out;
}

.header .menu-collapse {
  transform: translateX(-100%);
}

.collapse-icon {
  display: none;
}

@media only screen and (max-width: 768px) {
  .header.menu-container {
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
    z-index: 1;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .header .menu-container.collapsed {
    transform: translateX(0%);
  }

  .collapse-icon {
    display: block;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }

  .header .menu {
    padding: 10px 20px;
    gap: 20px;
    background-color: #F5F5F5;
    box-shadow: none;
  }
  .menu-toggle {
    display: none;
  }
  .header .menu {
  max-width: 320px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
  gap: 10px;
  background-color: #FFFFFF;
  box-shadow: 0px 4px 20px 5px rgba(184, 184, 184, 0.2);
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 2;
  }
  .header .menu-toggle:hover {
    color: #666666;
  }

  .header .menu-toggle {
    display: block;
    font-size: 24px;
    color: #000000;
    background-color: #ffffff;
    border: none;
    padding: 0;
    cursor: pointer;
    margin: 0 20px;
  }
 
}
</style>