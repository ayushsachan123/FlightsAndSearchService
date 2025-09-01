class CrudService {
    constructor(repository){
        this.repository = repository;
    }

    async create(data){
        return this.repository.create(data);
    }

    async get(modelId){
        return this.repository.get(modelId);
    }

    async getAll(){
        return this.repository.getAll();
    }

    async update(modelId, data){
        return this.repository.update(modelId, data);
    }

    async destroy(modelId){
        return this.repository.destroy(modelId);
    }
}

module.exports = CrudService;
