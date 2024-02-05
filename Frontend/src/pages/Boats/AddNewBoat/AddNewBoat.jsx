import './AddNewBoat.scss'

const AddNewBoat = () => {
    return ( 
        <main>
            <form>
                <input type="text" placeholder="Boats name" />
                <input type="number" placeholder="Production year"/>
                <input type="text" placeholder="Serial number" />
                <select name="" id="">
                    <option selected disabled>Select boats type</option>
                    <option value="">Pedal boat</option>
                    <option value="">Sail boat</option>
                    <option value="">Hovercraft</option>
                    <option value="">Ghostship</option>
                    <option value="">Container ship</option>
                </select>
                <select name="" id="">
                    <option selected disabled>Select boats material</option>
                    <option value="">GFK</option>
                    <option value="">Wood</option>
                    <option value="">Metal</option>
                    <option value="">Cardboard</option>
                    <option value="">Soul</option>
                </select>
            </form>
        </main>
    );
}

export default AddNewBoat;