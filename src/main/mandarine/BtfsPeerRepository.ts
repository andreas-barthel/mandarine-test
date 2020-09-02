import { Repository, MandarineRepository } from "https://deno.land/x/mandarinets@v2.0.1/mod.ts";
import {BtfsPeer} from "./BtfsPeer.ts";

@Repository()
export abstract class BtfsPeerRepository extends MandarineRepository<BtfsPeer> {

    constructor() {
        super(BtfsPeer);
    }

    public findByPeer(peer: string) {}
    public countByPeer(peer: string) {}
}
