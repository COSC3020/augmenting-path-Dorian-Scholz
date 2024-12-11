function augmentingPath(graph, start, end) 
{
    
    if (start === end) 
    {
        return [start];
    }

    
    let queue = [[start]];  
    let visited = new Set();
    visited.add(start);

    while (queue.length > 0) 
    {
        
        let path = queue.shift();
        let currentNode = path[path.length - 1];

        
        for (let neighbor in graph[currentNode]) 
        {
            
            if (neighbor === end) 
            {
                return [...path, neighbor];
            }

            
            if (!visited.has(neighbor))
            {
                visited.add(neighbor);
                queue.push([...path, neighbor]);
            }
        }
    }

    
    return [];
}
