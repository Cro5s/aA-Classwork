// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

function canFinish(numCourses, prerequisites) {
  let courseGraph = createGraph(prerequisites);
  let changed = true;
  let finishedCourses = new Set();
  let count = 0;

  while (changed) {
    changed = false;

    for (let course in courseGraph) {
        let allFinished = checkFinishedOrNot(courseGraph[course], finishedCourses);
  
        if (allFinished && !finishedCourses.has(course)) {
            finishedCourses.add(course);
            changed = true;
            count++;
        }
    }
  }


  return count === Object.keys(courseGraph).length;
}

function checkFinishedOrNot(prereqs, finishedCourses) {
    let bool = true;
    for(let i = 0; i < prereqs.length; i++) {
        if (!finishedCourses.has(prereqs[i])){
            bool = false;
        }
    }
    return bool;
}

function createGraph(prerequisites) {
    let graph = {};

    prerequisites.forEach((prereq) => {
        let course = prereq[0];
        let coursePrereq = String(prereq[1]);
        if (!graph[course]) {
            graph[course] = [coursePrereq];
        }else{
            graph[course].push(coursePrereq);
        }

        if (!graph[coursePrereq]) {
            graph[coursePrereq] = [];
        }
    })
    return graph;
}

// canFinish(2, [[1, 0], [2, 1], [1, 3]]);

// numCourses = 2; 
// prerequisites = [[1, 0], [0, 1]];
// graph = {
//     1: [0],
//     0: [1]
// }//false

// // prerequisites = [[1, 0], [2, 1], [1, 3]]
// graph = {
//     0: [],
//     3: [],
//     1: [0, 3],
//     2: [1]
// } //true

// //prerequisites = [[1, 0]]

// graph = {
//     1: [0],
//     0: []
// } //true