import { Table, Id, GeneratedValue, Column, SQLTypes } from "https://deno.land/x/mandarinets@v2.0.1/mod.ts";

@Table({ schema: "public" })
export class BtfsPeer {

    @Id()
    @Column({
        type: SQLTypes.BIGINT
    })
    @GeneratedValue({ strategy: "SEQUENCE" })
    public id?: number;

    @Column()
    public Addr: string;

    @Column()
    public Peer: string;

    @Column()
    public Latency: string;

    @Column()
    public Muxer: string;

    @Column()
    public Direction: number;

    @Column()
    public Streams: string;

    public static fromRaw(rawPeer: any): BtfsPeer {
        let peer = new BtfsPeer();
        peer.Addr = rawPeer.Addr;
        peer.Peer = rawPeer.Peer;
        peer.Latency = rawPeer.Latency;
        peer.Muxer = rawPeer.Muxer;
        peer.Direction = rawPeer.Direction;
        peer.Streams = rawPeer.Streams?.toString();
        return peer;
    }



}
