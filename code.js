function augmentingPath(graph, start, end)
{
    
    if (start === end) 
    {
        return [start];
    }

    
    let queue = [start];
    let parent = {};
    parent[start] = null;  
    
    while (queue.length > 0) 
    {
        let node = queue.shift();

        
        for (let neighbor of graph[node]) 
        {
            if (!(neighbor in parent)) 
            { 
                parent[neighbor] = node; 
                if (neighbor === end) 
                { 
                    
                    let path = [];
                    let current = end;
                    while (current !== null) 
                    {
                        path.unshift(current);
                        current = parent[current];
                    }
                    return path;
                }
                queue.push(neighbor); 
            }
        }
    }

    
    return [];
}
