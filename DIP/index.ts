// Dependency inversion principle

// Uma classe não pode depender de uma classe específica para a sua criação
// No exemplo a seguir estamos usando a inversão de dependência para que a "implementação" da outra classe seja feito somente ao instânciar o objeto
interface Category{

}

class DramaCategory implements Category{

}

class Movie{
    public _name
    public _category

    public constructor(name, category: Category){
        this._name = name
        this._category = category
    }

    public get name(){
        return this._name
    }
    public set name(name){
        this._name = name
    }

    public get category(){
        return this._category
    }

    public set category(category : Category){
        this.category = category
    }
}

const movie = new Movie("Name", new DramaCategory())