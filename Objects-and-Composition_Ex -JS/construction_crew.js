function construction_crew(worker) {
    if(worker.dizziness == true){
        worker.levelOfHydrated = worker.experience * worker.weight / 10;
        worker.dizziness = false;
    }
    return worker;
}

console.log(construction_crew({ weight: 80, experience: 1, levelOfHydrated: 0, dizziness: true }));