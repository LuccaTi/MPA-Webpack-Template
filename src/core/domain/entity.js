export function createEntity(
    {
        id = generateId(),
        info = '',
        createdAt = Date.now(),
    }
) {
    let _id = id;
    let _info = info;
    let _createdAt = createdAt;

    return {
        get id() { return _id; },
        get info() { return _info; },
        get createdAt() { return _createdAt; },

        updateInfo(newInfo) {
            if(!newInfo || newInfo.trim() === ''){
                throw new Error('A info da entity não pode estar vazia!');
            }

            _info = newInfo.trim();
        }
    }
}

function generateId() {
    return 'entity_' + Date.now() + '_' + Math.random().toString(36).substring(2, 9);
}